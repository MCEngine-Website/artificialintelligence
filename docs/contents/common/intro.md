# 🧠 Artificial Intelligence Common

Core utilities and shared components for AI functionality in Java.  
Published to GitHub Packages for easy integration via Maven or Gradle.

[`Repository`](https://github.com/MCEngine-Common/artificialintelligence)

---

## 📦 Installation

### 🔧 Maven

```xml
<dependency>
  <groupId>io.github.mcengine</groupId>
  <artifactId>artificialintelligence-common</artifactId>
  <version>{version}</version>
</dependency>
```

### ⚙️ Gradle

#### Groovy DSL

**Short form**:
```groovy
implementation 'io.github.mcengine:artificialintelligence-common:{version}'
```

**Long form**:
```groovy
dependencies {
    implementation group: 'io.github.mcengine', name: 'artificialintelligence-common', version: '{version}'
}
```

#### Kotlin DSL

**Short form**:
```kotlin
implementation("io.github.mcengine:artificialintelligence-common:{version}")
```

**Long form**:
```kotlin
dependencies {
    implementation(group = "io.github.mcengine", name = "artificialintelligence-common", version = "{version}")
}
```

---

## 🛠 Repository Configuration (GitHub Packages)

Ensure GitHub Packages is added to your repository configuration:

<details>
<summary>📚 Maven</summary>

```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/MCEngine-Common/artificialintelligence</url>
  </repository>
</repositories>
```
</details>

<details>
<summary>📚 Gradle (Groovy)</summary>

```groovy
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/MCEngine-Common/artificialintelligence")
    }
}
```
</details>

<details>
<summary>📚 Gradle (Kotlin)</summary>

```kotlin
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/MCEngine-Common/artificialintelligence")
    }
}
```
</details>
