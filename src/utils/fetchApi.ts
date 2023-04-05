import { Albums } from "../interfaces/Albums";
import { Photos } from "../interfaces/Photos";
import { Users } from "../interfaces/Users";

export const fetchUsers = async (): Promise<Users[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users[] = await response.json();
  return data;
};

export const fetchUserID = async (id: number): Promise<Users> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data: Users = await response.json();
  return data;
};

export const fetchAlbumsWithUserID = async (id: number): Promise<Albums[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  const data: Albums[] = await response.json();
  return data;
};

export const fetchAllAlbums = async (): Promise<Albums[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data: Albums[] = await response.json();
  return data.slice(0, 20);
};

export const fetchAlbumID = async (id: number): Promise<Albums> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  const data: Albums = await response.json();
  return data;
};

export const fetchPhotosWithAlbumID = async (id: number): Promise<Photos[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const data: Photos[] = await response.json();
  return data;
};

export const fetchAllPhotos = async (): Promise<Photos[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data: Photos[] = await response.json();
  return data.slice(0, 20);
};
