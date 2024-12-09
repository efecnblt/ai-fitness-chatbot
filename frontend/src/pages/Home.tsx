import { Box, useMediaQuery, useTheme, Grid, Typography, Button } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
    const theme = useTheme();
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            width={"100%"}
            minHeight={"100vh"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{
                background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                color: "#fff",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 10,
                    px: 2,
                }}
            >
                {/* Animasyonlu yazı */}
                <Typography
                    variant={isBelowMd ? "h4" : "h3"}
                    textAlign="center"
                    fontWeight={700}
                    sx={{ mb: 4, letterSpacing: 1, userSelect: "none" }}
                >
                    <TypingAnim />
                </Typography>

                {/* Robot ve OpenAI Görselleri */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ my: 4 }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            component="img"
                            src="robot.png"
                            alt="robot"
                            sx={{
                                width: isBelowMd ? "120px" : "200px",
                                transition: "transform 0.3s",
                                ":hover": {
                                    transform: "scale(1.05)",
                                },
                                filter: "drop-shadow(0 0 15px rgba(0,255,252,0.5))",
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box
                            component="img"
                            src="openai.png"
                            alt="openai"
                            sx={{
                                width: isBelowMd ? "120px" : "200px",
                                transition: "transform 0.3s",
                                ":hover": {
                                    transform: "scale(1.05)",
                                },
                                filter: "drop-shadow(0 0 15px rgba(138,43,226,0.5))",
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Küçük bir slogan veya CTA */}
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: "600px", mb: 4 }}
                >
                    Discover personalized workouts, nutrition tips, and insightful guidance
                    to boost your fitness journey.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#00fffc",
                        color: "black",
                        fontWeight: "600",
                        borderRadius: 2,
                        ":hover": {
                            bgcolor: "#00e6e3",
                        },
                    }}
                >
                    Get Started
                </Button>
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;
