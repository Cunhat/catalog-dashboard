export const formatTitle = (title: string, open: boolean) => {
  if (!open && title.includes(' ')) return title.split(' ')[1];
  return title;
};
