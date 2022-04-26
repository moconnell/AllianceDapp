import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Book from "./containers/Book";
import Home from "./containers/Home";
import Header from "./components/Header";
import Preferences from "./containers/Preferences";
import Meetings from "./containers/Meetings";
import ErrorFallback from "./ErrorFallback";

const App: React.VFC = () => {
  return (
    <main
      style={{
        background: "#333333",
        width: "vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/profile" element={<Preferences />} />
            <Route element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </main>
  );
};

export default App;
