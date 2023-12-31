const formatDate = date => {
  const d = date * 1000;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(d));
};

export default formatDate;
