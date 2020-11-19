const DogPhoto = ({ dogPhoto }) => {
  return (
    <img src={dogPhoto} alt={`Random dog: ${dogPhoto}`} className="photo" />
  );
};
export default DogPhoto;
