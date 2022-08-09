import { updateProfile, User } from 'firebase/auth';
import { IUser } from 'utils/interfaces';

export class UserModel implements IUser {
  id: string;
  bio: string;
  followers: string[];
  following: string[];
  likedPosts: string[];
  favorites: string[];
  authUser: User;

  constructor(id: string, authUser: User) {
    this.id = id;
    this.bio = '';
    this.followers = [];
    this.following = [];
    this.likedPosts = [];
    this.favorites = [];
    this.authUser = authUser;
  }

  getAuthUser() {
    return this.authUser;
  }

  updateUserProfile(displayName: string, photoURL?: string) {
    updateProfile(this.authUser, { displayName, photoURL });
  }
}
