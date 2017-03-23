package com.ukiraven.fbe25.configs;

        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.Configuration;
        import org.springframework.session.MapSessionRepository;
        import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
        import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
        import org.springframework.session.web.http.HeaderHttpSessionStrategy;
        import org.springframework.session.web.http.SessionRepositoryFilter;

@Configuration
@EnableSpringHttpSession
public class EmbeddedSessionConfig {

    @Bean
    public SessionRepositoryFilter<?> springSessionRepositoryFilter() {
        SessionRepositoryFilter<?> sessionRepositoryFilter = new SessionRepositoryFilter<>(new MapSessionRepository());
        sessionRepositoryFilter.setHttpSessionStrategy(new HeaderHttpSessionStrategy());
        return sessionRepositoryFilter;
    }
}