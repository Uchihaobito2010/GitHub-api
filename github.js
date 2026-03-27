const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app"
            },
            error: "Method not allowed",
            success: false
        });
    }

    const { username } = req.query;

    if (!username) {
        return res.status(400).json({
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app"
            },
            error: "Username is required",
            success: false
        });
    }

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const userData = response.data;

        const formattedResponse = {
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app",
                api: "GitHub Info API v1.0"
            },
            data: {
                bio: userData.bio || null,
                blog: userData.blog || "",
                company: userData.company || null,
                created_at: userData.created_at,
                email: userData.email || null,
                followers: userData.followers,
                following: userData.following,
                location: userData.location || null,
                name: userData.name || null,
                profile_pic_url: userData.avatar_url,
                profile_url: userData.html_url,
                public_repos: userData.public_repos,
                username: userData.login
            },
            success: true
        };

        res.status(200).json(formattedResponse);

    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).json({
                credits: {
                    dev: "Paras (Aotpy)",
                    contact: "https://t.me/Aotpy",
                    channel: "https://t.me/obitostuffs",
                    portfolio: "https://Aotpy.vercel.app"
                },
                data: null,
                success: false,
                error: "User not found"
            });
        } else {
            res.status(500).json({
                credits: {
                    dev: "Paras (Aotpy)",
                    contact: "https://t.me/Aotpy",
                    channel: "https://t.me/obitostuffs",
                    portfolio: "https://Aotpy.vercel.app"
                },
                data: null,
                success: false,
                error: "Failed to fetch GitHub user data"
            });
        }
    }
};
