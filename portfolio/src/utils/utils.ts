export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  })
