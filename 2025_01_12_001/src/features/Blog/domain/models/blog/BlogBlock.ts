type BlockType = "heading" | "paragraph" | "image";
type Metadata = {
  imageUrl?: string;
  alt?: string;
  level?: number;
} | null;

export class BlogBlock {
  constructor(
    private type: BlockType,
    private content: string,
    private metadata: Metadata
  ) {
    this.validateType(type);
    this.validateContent(content);
    this.validateMetadata(type, metadata);
  }

  private validateType(type:BlockType):void {
    if(!type){
        throw new Error("BlogBlock type cannnot be empty")
    }
  }
  private validateContent(content:string):void {
    if(!content || content.trim().length === 0){
        throw new Error("BlogBlock content cannot be empty")
    }
  }

  private validateMetadata(type:BlockType,metadata:Metadata):void {
    switch(type){
        case "heading":
            if(!metadata?.level || !metadata)

    }
  }
}
