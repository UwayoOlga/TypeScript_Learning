/* 
An implementation of the singleton pattern must:

ensure that only one instance of the singleton class ever exists;
and provide global access to that instance.
Typically, this is done by:

declaring all constructors of the class to be private (or throw an error in constructor); and
providing a static method that returns a reference to the instance.
Task
Your task is to implement SingletonCounter class with static method getInstance that returns instance of SingletonCounter. Constructor of this class must be declared as private. This class should have inc() which increments the value of the counter (default value of the counter is zero).

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

SingletonFundamentalsTuto */

class SingletonCounter {
  private static instance: SingletonCounter | null = null;
  private count = 0;

  private constructor() {}

  public static getInstance(): SingletonCounter {
    if (this.instance === null) {
      this.instance = new SingletonCounter();
    }
    return this.instance;
  }

  public inc(): number {
    this.count++;
    return this.count;
  }

  public getCount(): number {
    return this.count;
  }
}
/*
🔸 Declares a static property called instance.
🔸 static means it belongs to the class itself, not to instances.
🔸 It’s private so it can't be accessed outside the class.
🔸 It's initially null, which means no instance has been created yet.
🔸 A normal (non-static) property that keeps track of the count is initialized to 0. 
🔸 The constructor is private.
  This means you can’t use new SingletonCounter() from outside the class.
 This enforces that the only way to get an instance is via getInstance(). 
 🔸 Declares a static method — it can be called directly on the class.
🔸 public, so it can be accessed from anywhere.
🔸 It returns a SingletonCounter instance.
🔸 Checks if an instance already exists.
🔸 If not (null), it creates one using the private constructor.
🔸 This only runs once — the first time getInstance() is called.
🔸 A public instance method that increases the count by 1.
🔸 It returns the updated count.*/