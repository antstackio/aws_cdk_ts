import {
  NestedStack,
  NestedStackProps,
  aws_dynamodb as dynamodb,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export default class DataBase extends NestedStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new dynamodb.Table(this, 'Table', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    });
  }
}
