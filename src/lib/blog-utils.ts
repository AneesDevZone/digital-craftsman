const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
  
  const getCategoryIcon = (category: string) => {
    const categoryData = blogCategories.find(cat => cat.name === category)
    return categoryData ? categoryData.icon : BookOpen
  }
  
  const getCategoryColor = (category: string) => {
    const categoryData = blogCategories.find(cat => cat.name === category)
    return categoryData ? categoryData.color : 'text-gray-600'
  }
  