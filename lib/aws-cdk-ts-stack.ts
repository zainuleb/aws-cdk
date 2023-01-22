import * as cdk from 'aws-cdk-lib';
import * as _s3 from 'aws-cdk-lib/aws-s3';

import { Construct } from 'constructs';

export class AwsCdkTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const s3Bucket = new _s3.Bucket(this, 'testBucket', {
      bucketName: 'samplebucket-123-xxxx',
      versioned: true,
      encryption: _s3.BucketEncryption.KMS_MANAGED,
    });
  }
}
