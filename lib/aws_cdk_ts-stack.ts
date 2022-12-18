import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import Api from './backend/api/infrastructure';
import Database from './backend/database/infrastructure';

export class AwsCdkTsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new Api(this, 'api');

    const database = new Database(this, 'database');
  }
}
