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
  email: string;

  constructor(id: string, authUser: User) {
    this.id = id;
    this.bio = '';
    this.followers = [];
    this.following = [];
    this.likedPosts = [];
    this.favorites = [];
    this.authUser = authUser;
    this.email = '';
  }

  getAuthUser() {
    return this.authUser;
  }

  fillProfile(bio: string, followers: [], following: [], likedPosts: [], favorites: []) {
    this.bio = bio;
    this.followers = followers;
    this.following = following;
    this.likedPosts = likedPosts;
    this.favorites = favorites;
  }

  updateUserProfile(displayName: string, photoURL?: string) {
    updateProfile(this.authUser, { displayName, photoURL });
  }
}
