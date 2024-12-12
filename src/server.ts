import express from "express";
import session from 'express-session';
import cookieParser from "cookie-parser";
import {Request, Response, Router} from "express";

import { eventManager } from "./backend/script";

import cors from "cors"


const port = 3000; 
export const server = express();

