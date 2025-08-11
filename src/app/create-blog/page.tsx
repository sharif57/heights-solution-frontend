
"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Edit, ImageIcon, Plus, Trash2, Upload } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Blog {
    id?: string
    _id?: string
    title: string
    description: string
    image?: string
    createdAt: string
    status: "published" | "draft"
    author?: { name: string; email: string }
}

interface BlogResponse {
    success: boolean
    message: string
    data: {
        metadata: {
            totalBlogs: number
            totalPages: number
            currentPage: number
            pageSize: number
        }
        blogs: Blog[]
    }
}

export default function BlogManagement() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string>("")
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetchBlogs(currentPage)
    }, [currentPage])

    const fetchBlogs = async (page: number) => {
        setIsLoading(true)
        try {
            const response = await fetch(`http://10.10.12.54:3013/api/v1/blog/all-blogs?page=${page}&limit=10`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                },
            })
            const data: BlogResponse = await response.json()
            if (data.success) {
                setBlogs(data.data.blogs.map(blog => ({
                    id: blog.id || blog._id || '', // Provide fallback empty string if both are missing
                    title: blog.title,
                    description: blog.description,
                    image: blog.image,
                    createdAt: blog.createdAt,
                    status: "draft", // Default status, adjust based on API if needed
                    author: blog.author,
                })))
                setTotalPages(data.data.metadata.totalPages)
            }
        } catch (error) {
            console.error("Error fetching blogs:", error)
            showAlert("error", "Failed to fetch blogs.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const resetForm = () => {
        setTitle("")
        setDescription("")
        setImage(null)
        setImagePreview("")
    }

    const showAlert = (type: "success" | "error", message: string) => {
        setAlert({ type, message })
        setTimeout(() => setAlert(null), 5000)
    }

    const handleCreateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData()
        formData.append("data", JSON.stringify({ title, description }))
        if (image) formData.append("image", image)

        try {
            const response = await fetch("http://10.10.12.54:3013/api/v1/blog/create-blog", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                },
            })

            if (response.ok) {
                showAlert("success", "Blog created successfully!")
                resetForm()
                setIsCreateModalOpen(false)
                fetchBlogs(currentPage)
            } else {
                showAlert("error", "Failed to create blog.")
            }
        } catch (error) {
            console.error("Error:", error)
            showAlert("error", "An error occurred while creating the blog.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedBlog) return

        setIsLoading(true)

        const formData = new FormData()
        formData.append("data", JSON.stringify({ title, description }))
        if (image) formData.append("image", image)

        try {
            const response = await fetch(`http://10.10.12.54:3013/api/v1/blog/update-blog/${selectedBlog.id}`, {
                method: "PATCH",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                },
            })

            if (response.ok) {
                showAlert("success", "Blog updated successfully!")
                resetForm()
                setIsUpdateModalOpen(false)
                setSelectedBlog(null)
                fetchBlogs(currentPage)
            } else {
                showAlert("error", "Failed to update blog.")
            }
        } catch (error) {
            console.error("Error:", error)
            showAlert("error", "An error occurred while updating the blog.")
        } finally {
            setIsLoading(false)
        }
    }

    const openUpdateModal = (blog: Blog) => {
        setSelectedBlog(blog)
        setTitle(blog.title)
        setDescription(blog.description)
        setImagePreview(blog.image || "")
        setIsUpdateModalOpen(true)
    }

    const handleDeleteBlog = async (blogId: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return

        try {
            const response = await fetch(`http://10.10.12.54:3013/api/v1/blog/delete-blog/${blogId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
                },
            })

            if (response.ok) {
                showAlert("success", "Blog deleted successfully!")
                fetchBlogs(currentPage)
            } else {
                showAlert("error", "Failed to delete blog.")
            }
        } catch (error) {
            console.error("Error:", error)
            showAlert("error", "An error occurred while deleting the blog.")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
                            <p className="text-gray-600 mt-1">Create, edit, and manage your blog posts</p>
                        </div>
                        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create New Blog
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">Create New Blog Post</DialogTitle>
                                    <DialogDescription>Fill in the details below to create a new blog post.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleCreateSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="create-title" className="text-sm font-medium">Title</Label>
                                        <Input
                                            id="create-title"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Enter blog title..."
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="create-description" className="text-sm font-medium">Description</Label>
                                        <Textarea
                                            id="create-description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Write your blog content here..."
                                            required
                                            rows={6}
                                            className="w-full resize-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="create-image" className="text-sm font-medium">Featured Image</Label>
                                        <div className="flex items-center justify-center w-full">
                                            <label
                                                htmlFor="create-image"
                                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                                            >
                                                {imagePreview ? (
                                                    <img
                                                        src={`http://10.10.12.54:3013/${imagePreview}` || "/placeholder.svg"}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                )}
                                                <input
                                                    id="create-image"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <DialogFooter className="gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => { resetForm(); setIsCreateModalOpen(false) }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                        >
                                            {isLoading ? "Creating..." : "Create Blog"}
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                {alert && (
                    <Alert
                        className={`mb-6 ${alert.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                    >
                        <AlertDescription className={alert.type === "success" ? "text-green-800" : "text-red-800"}>
                            {alert.message}
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs?.map((blog) => (
                        <Card
                            key={blog.id}
                            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm"
                        >
                            <div className="relative">
                                {blog.image ? (
                                    <img
                                        src={`http://10.10.12.54:3013/${blog.image}` || "/placeholder.svg"}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                                        <ImageIcon className="w-12 h-12 text-gray-400" />
                                    </div>
                                )}
                                <Badge
                                    variant={blog.status === "published" ? "default" : "secondary"}
                                    className="absolute top-3 right-3"
                                >
                                    {blog.status}
                                </Badge>
                            </div>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CalendarDays className="w-4 h-4" />
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{blog.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="w-6 h-6">
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback className="text-xs">{blog.author?.name.charAt(0) || "AU"}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-xs text-gray-500">{blog.author?.name || "Author"}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {/* <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                            <Eye className="w-4 h-4" />
                                        </Button> */}
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => openUpdateModal(blog)}>
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                            onClick={() => handleDeleteBlog(blog.id || "")}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-6 flex justify-center gap-2">
                        <Button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            variant="outline"
                        >
                            Previous
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                variant={currentPage === page ? "default" : "outline"}
                                className={currentPage === page ? "bg-blue-600 text-white" : ""}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            variant="outline"
                        >
                            Next
                        </Button>
                    </div>
                )}

                <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Update Blog Post</DialogTitle>
                            <DialogDescription>Make changes to your blog post below.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleUpdateSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="update-title" className="text-sm font-medium">Title</Label>
                                <Input
                                    id="update-title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter blog title..."
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="update-description" className="text-sm font-medium">Description</Label>
                                <Textarea
                                    id="update-description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Write your blog content here..."
                                    required
                                    rows={6}
                                    className="w-full resize-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="update-image" className="text-sm font-medium">Featured Image</Label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="update-image"
                                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                                    >
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview || "/placeholder.svg"}
                                                alt="Preview"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Upload className="w-8 h-8 mb-4 text-gray-500" />
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        )}
                                        <input
                                            id="update-image"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            <DialogFooter className="gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => { resetForm(); setIsUpdateModalOpen(false); setSelectedBlog(null) }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                                >
                                    {isLoading ? "Updating..." : "Update Blog"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}