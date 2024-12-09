import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    width: "100%",
                    minHeight: "10vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    p: 2,
                    mt: 4,
                }}
            >
                <Typography variant="body1" textAlign="center" sx={{ color: "#fff" }}>
                    Created for Fitness Lovers by{" "}
                    <Link
                        to={"https://www.youtube.com/watch?v=3E-ba-r8da0"}
                        style={{
                            color: "#00fffc",
                            textDecoration: "none",
                            fontWeight: "bold",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8A2BE2")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#00fffc")}
                    >
                        Ali F. KAYA, Murat ERBILICI, Efe CANBOLAT
                    </Link>
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
