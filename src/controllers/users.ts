import express, { Request, Response } from "express";
import { getUsers } from "../db/users";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
