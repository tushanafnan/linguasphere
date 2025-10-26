import PlansSection from "../components/PlansSection";

const Subscription: React.FC = () => {
  return (
    <div className='font-sans text-gray-800 min-h-[80vh] flex justify-center items-center'>
      <PlansSection limit={20} showViewAll={false} />
    </div>
  );
};

export default Subscription;
