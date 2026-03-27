module.exports = (req, res) => {
    res.status(200).json({
        name: "GitHub Info API",
        description: "A simple API to fetch GitHub user information",
        version: "1.0.0",
        credits: {
            dev: "Paras (Aotpy)",
            contact: "https://t.me/Aotpy",
            channel: "https://t.me/obitostuffs",
            portfolio: "https://Aotpy.vercel.app"
        },
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
                example: "/api/github?username=bitaimkingfree",
                response_format: {
                    credits: {},
                    data: {},
                    success: true
                }
            },
            homepage: {
                path: "/",
                method: "GET",
                description: "Get API information and endpoints"
            }
        },
        usage: {
            base_url: "https://your-domain.vercel.app",
            example_curl: "curl 'https://your-domain.vercel.app/api/github?username=bitaimkingfree'"
        }
    });
};
