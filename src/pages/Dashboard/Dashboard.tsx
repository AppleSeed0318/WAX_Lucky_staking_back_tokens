import { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Box, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import NFTCard from "../../components/NFTCard";
import { maxHeight } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import * as waxjs from "@waxio/waxjs/dist";

import Modal from '@mui/material/Modal';

export const Dashboard = () => {
  
  return (
    <main className={styles.main}>

      <section className={styles.section}>
        <div className={styles.mainbg}>
          <img src="/image/main_image.png"/>
        </div>
        <div className={styles.effects}>
          <div>
            <img src="/image/left_main.png"/>
          </div>
          <div className={styles.btn_confirm}>
            <Button >&nbsp;</Button>
          </div>
          <div>
            <img src="/image/right_main.png"/>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerAnchor}>
          © Copyright 2022 Let's Fight
        </p>
      </footer>
    </main>
  );
};
