import Nurse from "../assets/demo-nurse.webp";

const MemberCard = ({ memberItem }) => {
  return (
    <>
      <div className="bg-white text-black rounded-lg shadow-lg w-60">
        <img src={Nurse} alt="" className="w-full object-cover shadow-black " />

        <div className="text-center text-white-600">
          <h1 className="text-xl font-semibold">{memberItem.username}</h1>
          <h2>{memberItem.email}</h2>
          <h3>{memberItem.role}</h3>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
