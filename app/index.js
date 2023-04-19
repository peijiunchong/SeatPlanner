import { View } from "react-native";
import { Link } from "expo-router";
import { Home, About, Login, Signup, Help } from "../screens";
import { useState } from "react";
import {  AuthProvider } from "../context/AuthContext";
import { AppNav } from "./navigation/AppNav";

export default function Index() {

    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}