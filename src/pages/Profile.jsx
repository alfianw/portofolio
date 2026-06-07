import React, { useEffect, useState } from "react";
import { detailUser } from "../api/auth";
import API_BASE from "../api/apiConfig";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await detailUser();
                setProfile(response.data.data);
            } catch (error) {
                setError("Gagal memuat data profile.");
            }
        };
        fetchProfile();
    }, []);

    if (error) return <p>{error}</p>;
    if (!profile) return <p>Loading Profile...</p>;

    return (
        <div className="profile-container">
            <img src={`${API_BASE}${profile.pathImageProfile}`} alt="profile" />
            <p>Nama: {profile.name}</p>
            <p>Username: {profile.userName}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default Profile;
