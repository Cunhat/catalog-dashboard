export const formatTitle = (title: string, open: boolean) => {
  if (!open && title.includes(' ')) return title.split(' ')[1];
  return title;
};

export const removeUndefinedProps = (obj: any) => {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      removeUndefinedProps(obj[prop]);
    } else if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
    if (typeof obj[prop] === 'object' && Object.keys(obj[prop]).length === 0) delete obj[prop];
  }
  return obj;
};
