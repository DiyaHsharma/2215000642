const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
