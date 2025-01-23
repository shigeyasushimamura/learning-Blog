import { BlogPost } from "../BlogPost";

export interface IBlogRepository {
  save(blogPost: BlogPost): Promise<BlogPost>;
  findById(id: string): Promise<BlogPost | null>;
  findByUserId(userId: string): Promise<BlogPost[]>;
  delete(id: string): Promise<void>;
}
