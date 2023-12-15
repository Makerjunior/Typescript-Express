// Defina a interface que representa apenas alguns dados específicos
/**
 *
 *
 * @interface SimplifiedGitHubUser
 */
 export interface SimplifiedGitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    followers: number;
    following: number;
    created_at: string;
  }