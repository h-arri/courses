const getCourses = async () => {
  const response = await fetch('courseList.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((response) => response.json());

  return response;
};

export {getCourses};
