const Profile = ({ user }) => {
    return(
        <div className="profile">
            <h1>Perfil</h1>
            {user && <p className="profile-username">Nombre de usuario: {user.username}</p>}
        </div>
    );
}

export default Profile;