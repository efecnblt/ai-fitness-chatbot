import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const theme = useTheme();
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            toast.loading("Signing Up", { id: "signup" });
            await auth?.signup(name, email, password);
            toast.success("Signed Up Successfully", { id: "signup" });
        } catch (error) {
            console.log(error);
            toast.error("Signing Up Failed", { id: "signup" });
        }
    };

    useEffect(() => {
        if (auth?.user) {
            return navigate("/chat");
        }
    }, [auth]);

    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                overflowX: "hidden", // Yatay scroll engelleniyor
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    boxShadow: "0 0 40px rgba(255,255,255,0.1)",
                    padding: isBelowMd ? "20px" : "40px",
                    maxWidth: "400px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight={700}
                    sx={{ mb: 4 }}
                >
                    Create an Account
                </Typography>
                <CustomizedInput
                    type="text"
                    name="name"
                    label="Name"
                    style={{ marginBottom: "16px" }}
                />
                <CustomizedInput
                    type="email"
                    name="email"
                    label="Email"
                    style={{ marginBottom: "16px" }}
                />
                <CustomizedInput
                    type="password"
                    name="password"
                    label="Password"
                    style={{ marginBottom: "24px" }}
                />
                <Button
                    type="submit"
                    fullWidth
                    sx={{
                        py: 1.5,
                        fontWeight: "600",
                        backgroundColor: "#00fffc",
                        color: "black",
                        borderRadius: "8px",
                        ":hover": {
                            bgcolor: "#00e6e3",
                            color: "#000",
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    endIcon={<IoIosLogIn />}
                >
                    Sign Up
                </Button>
            </form>
        </Box>
    );
};

export default Signup;
