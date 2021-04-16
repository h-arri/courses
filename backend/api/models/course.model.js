module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      courseId: String,
      courseName: String,
      wishListFlag: Boolean
    }
  );

  schema.method('toJSON', function() {
    const { courseId, ...object } = this.toObject();
    object.id = courseId;
    return object;
  });
    
  return mongoose.model(
    'courses',
    schema
  );
};
