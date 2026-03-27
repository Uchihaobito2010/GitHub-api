const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({
            error: "Method not allowed",
            success: false,
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app"
            }
        });
    }

    const { username } = req.query;

    if (!username) {
        return res.status(400).json({
            error: "Username is required. Usage: /api/github?username=bitaimkingfree",
            success: false,
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app"
            }
        });
    }

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const userData = response.data;

        const formattedResponse = {
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
            success: true,
            credits: {
                dev: "Paras (Aotpy)",
                contact: "https://t.me/Aotpy",
                channel: "https://t.me/obitostuffs",
                portfolio: "https://Aotpy.vercel.app",
            }
        };

        res.status(200).json(formattedResponse);

    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).json({
                data: null,
                success: false,
                error: "User not found",
                credits: {
                    dev: "Paras (Aotpy)",
                    contact: "https://t.me/Aotpy",
                    channel: "https://t.me/obitostuffs",
                    portfolio: "https://Aotpy.vercel.app"
                }
            });
        } else {
            res.status(500).json({
                data: null,
                success: false,
                error: "Failed to fetch GitHub user data",
                credits: {
                    dev: "Paras (Aotpy)",
                    contact: "https://t.me/Aotpy",
                    channel: "https://t.me/obitostuffs",
                    portfolio: "https://Aotpy.vercel.app"
                }
            });
        }
    }
};
