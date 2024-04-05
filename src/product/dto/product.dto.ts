import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly imageURL: string;
  @IsNumber()
  readonly price: number;
  @IsNumber()
  readonly cant: number;

  @IsDate()
  @IsOptional()
  readonly createdAt: Date;
}
