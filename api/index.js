module.exports = (req, res) => {
    res.status(200).json({
        name: "GitHub Info API",
        description: "A simple API to fetch GitHub user information",
        endpoints: {
            github_user: {
                path: "/api/github",
                method: "GET",
                params: {
                    username: {
                        required: true,
                        type: "string",
                        description: "GitHub username"
                    }
                },
                example: "/api/github?username=Aotpy",
                response_format: {
                    data: {},
                    success: true,
                    credits: {}
                }
            },
            homepage: {
                path: "/",
                method: "GET",
                description: "Get API information and endpoints"
            }
        },
        usage: {
            base_url: "https://info-tobi-api.vercel.app",
            example_curl: "curl 'https://info-tobi-api.vercel.app/api/github?username=Aotpy'"
        },
        credits: {
            dev: "Paras (Aotpy)",
            contact: "https://t.me/Aotpy",
            channel: "https://t.me/obitostuffs",
            portfolio: "https://Aotpy.vercel.app"
        }
    });
};
