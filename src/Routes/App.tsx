import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ButtonAppBar from "../components/Header";
import { Dashboard } from "../pages/Dashboard";
import { Fighters } from "../pages/Fighters";
import { Profile } from "../pages/Profile";
import { Registeration } from "../pages/Registeration";
import { WalletManager } from "../pages/WalletManager";

export const App = () => {
  const [NFTs, setNFT] = useState([]);
  const [Assets, setAssets] = useState([]);
  const [Account, setAccount] = useState("");

  const [loginFlag, setLogin] = useState(true);
  const [balance, setBalance] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <>
      <BrowserRouter>
          <ButtonAppBar userAccount = {Account} balance = {balance} loginFlag = {loginFlag} nickname = {nickname} />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/fighters" element={<Fighters NFTs = {NFTs} Assets = {Assets} Account = {Account}/>} />
            <Route 
              path="/profile" 
              element={<Profile 
                userAccount = {Account} 
                setLogin = {setLogin} 
                setAccount = {setAccount} 
                setAssets = {setAssets} 
                setBalance = {setBalance}
                nickname = {nickname}
                setNickname = {setNickname}
              />}
            />
            <Route path="/reg" element={<Registeration/>} />
            <Route path="/wallet-manage" element={<WalletManager setNFT = {setNFT} setAssets = {setAssets} userAccount={Account} setAccount = {setAccount} setLogin = {setLogin} setBalance = {setBalance}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};
