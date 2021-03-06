import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class BookDto {
    @Field(() => ID)
    readonly id: number;
    @Field()
    readonly title: string;
}
