//
//  RCTNativeBooks.m
//  diff
//
//  Created by Dmitriy Shishkin on 10.03.2025.
//

#import "RCTNativeBooks.h"

#import "diff-Swift.h"

@interface RCTNativeBooks()

@end

@implementation RCTNativeBooks

RCT_EXPORT_MODULE(NativeBooks)

- (id) init {
  if (self = [super init]) {

  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeBooksSpecJSI>(params);
}

- (nonnull NSNumber *)removeBook { 
  return @([BooksHelper removeBook]);
}

@end
