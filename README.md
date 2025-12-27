# React Custom Hook – useFetch 📦

## 📌 Problem Statement
The objective of this assignment is to create a **custom React hook** that simplifies the process of fetching data from an API. The hook should manage loading, error, and data states efficiently and be reusable across components.

---

## 🛠️ Solution Overview
We created a custom hook named **`useFetch`** that:
- Accepts an API URL as a parameter
- Fetches data using the JavaScript `fetch` API
- Manages loading and error states
- Returns fetched data in a clean and reusable way

A React component uses this hook to fetch and display product data from a dummy API.

---

## 🌐 API Used
https://api.escuelajs.co/api/v1/products

---

## 📁 Project Structure

## Project Folder Structure

![Project Structure](/structure.png)  



---

## 🔧 Custom Hook: `useFetch`
### Features:
- Uses `useState`, `useEffect`, and `useCallback`
- Handles:
  - `loading` state
  - `error` state
  - `data` state
- Re-fetches data automatically when the URL changes


