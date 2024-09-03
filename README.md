# Change Detection and DI Showcase
[DEMO LINK](https://igor-stasiv.github.io/change-detection-showcase/)


## Change Detection Strategies

### Default Strategy
Angular's Default Change Detection Strategy checks every component in the component tree whenever change detection is triggered. This can be inefficient for larger applications or complex component trees due to the frequent and comprehensive checks.
### OnPush Strategy
The OnPush Change Detection Strategy optimizes performance by only checking a component when:
- Its input properties change,
- An event occurs within the component, or
- markForCheck() is explicitly called.
This strategy is particularly effective for improving performance in applications with large or deep component trees, as it reduces unnecessary checks.


## Hierarchical Dependency Injection

### Root-Level Injection
Services provided at the root level are singletons and shared across the entire application. This ensures a single instance of the service is used throughout the app.
### Component-Level Injection
When a service is provided within a component, Angular creates a new instance of that service specifically for that component and its children. This demonstrates Angular's hierarchical dependency injection, allowing different parts of the application to use distinct instances of a service if required.
### Injector Hierarchies Types
- EnvironmentInjector: Injects services at the environment level.
- ModuleInjector: Injects services at the module level.
- PlatformInjector: Injects services at the platform level.
- ElementInjector: Injects services at the element level, particularly useful in advanced scenarios.
### Resolution Modifiers
1. @Optional: Injects a dependency if it exists; otherwise, it injects null. 
2. @Host: Injects a dependency from the closest ancestor injector.
3. @SkipSelf: Skips the current injector and looks up the parent injector. 
4. @Skip: Skips the injection of a particular provider and uses the next available provider in the hierarchy.

## Benefits and Use Cases

### Default Strategy
Best For: Components with frequently changing data or where changes are unpredictable.
### OnPush Strategy
Ideal For: Performance optimization in large applications or components where updates are only needed when specific inputs change.
### Hierarchical Dependency Injection
Benefit: Offers flexibility in managing service instances, allowing different sections of an application to utilize separate instances of a service as needed.
