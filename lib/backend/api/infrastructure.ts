import {
  NestedStack,
  NestedStackProps,
  aws_lambda as lambda,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export default class Api extends NestedStack {
  constructor(scope: Construct, id: string, props?: NestedStackProps) {
    super(scope, id, props);

    const usersfn = new lambda.Function(this, 'usersfn', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'runtime/users')),
    });

    const ordersfn = new lambda.Function(this, 'ordersfn', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'runtime/orders')),
    });
  }
}
