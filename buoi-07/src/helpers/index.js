export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categories: post.categories
  }
}

export function mappingCategoryData(item) {
  return {
    id: item.id,
    link: item.link,
    name: item.name,
    slug: item.slug
  }
}

export function setCategoriesData(posts, categories) {
  posts.map(item => {
    let category = categories.filter(value => item.categories.includes(value.id))
    if(category.length){
      item.categories = category
    }
  })
  return posts
}