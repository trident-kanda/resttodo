type props = {
  title: string;
};
const Title = ({ title }: props) => {
  return <h2 className="text-4xl text-center py-4 text-blue-300 ">{title}</h2>;
};

export default Title;
