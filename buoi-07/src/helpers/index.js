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

export function categoryData(list) {
  let data = {};
  list.forEach(element => {
    const key = element.id 
    data[key] = {
      id: element.id,
      name: element.name,
      slug: element.slug
    }
  });
  return data
}