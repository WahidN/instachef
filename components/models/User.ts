export interface UserModel {
  id: string;
  bio: string;
  followers: string[];
  following: string[];
  likedPosts: string[];
  favorites: string[];
  readonly displayName?: string | null;
  readonly email?: string | null;
  readonly emailVerified?: boolean;
  readonly photoUrl?: string | null;
}
