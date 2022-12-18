#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTsStack } from '../lib/aws_cdk_ts-stack';

const app = new cdk.App();
new AwsCdkTsStack(app, 'AwsCdkTsStack');
