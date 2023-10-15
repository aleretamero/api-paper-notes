import { CreateCommentDto } from "./CreateCommentDto";

export interface UpdateCommentDto
  extends Partial<Omit<CreateCommentDto, "user" | "note">> {}
