import { Field, InputType } from 'type-graphql';

@InputType()
export class BookInput {
    @Field()
    readonly title: string;
}
